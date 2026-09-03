exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Server Telegram configuration missing" }),
      };
    }

    const {
      quoteId,
      fullName,
      company,
      email,
      phone,
      speed,
      items,
      notes,
      fileName,
    } = data;

    const messageLines = [
      `🔔 <b>NEW QUOTATION REQUEST — SBF PRINT</b>`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📄 <b>Quote Ref:</b> <code>${quoteId || "N/A"}</code>`,
      `👤 <b>Client:</b> ${fullName || "N/A"}`,
      `🏢 <b>Company:</b> ${company || "Individual"}`,
      `📞 <b>Phone / WhatsApp:</b> ${phone || "N/A"}`,
      `✉️ <b>Email:</b> ${email || "N/A"}`,
      `⚡ <b>Turnaround:</b> ${speed || "Standard"}`,
    ];

    if (fileName && fileName !== "None attached") {
      messageLines.push(`📎 <b>Artwork / File:</b> ${fileName}`);
    }

    if (notes && notes !== "None") {
      messageLines.push(`📝 <b>Notes:</b> ${notes}`);
    }

    messageLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    messageLines.push(`🛒 <b>ORDERED ITEMS:</b>`);
    messageLines.push(items || "No item details specified.");
    messageLines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    messageLines.push(`🌐 <i>Generated via sbfprint.ae</i>`);

    const telegramPayload = {
      chat_id: chatId,
      text: messageLines.join("\n"),
      parse_mode: "HTML",
    };

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(telegramPayload),
    });

    const result = await res.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: result.ok, result }),
    };
  } catch (err) {
    console.error("Telegram quotation handler error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
