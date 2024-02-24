var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/send-email-using-resend.js
var send_email_using_resend_exports = {};
__export(send_email_using_resend_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(send_email_using_resend_exports);
var RESEND_API_KEY = process.env.VITE_REACT_APP_RESEND_API_KEY;
var handler = async (event) => {
  try {
    const { from, subject, to, react } = JSON.parse(event.body);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "email@sandrasanchezart.space",
        to: "bennnnnnnvu@gmail.com",
        subject: "hello",
        html: "<strong>payment successful!</strong>"
      })
    });
    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify(`Successfully sent email!`)
      };
    }
  } catch (error) {
    console.log(error);
    return {
      body: JSON.stringify({ error: `Failed to send email` })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=send-email-using-resend.js.map
