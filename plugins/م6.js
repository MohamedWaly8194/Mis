let handler = async (m, { conn, command, text }) => {
let love = `
*⧠━──━⧈⇓《✨️》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم البنـ💸ـك*
*⧠━──━⧈⇓《✨️》⇓⧈━──━⧠*
*⏎┇✨️⃝•┇【.يومي】➥*
*⏎┇✨️⃝•┇【.رانــك】➥*
*⏎┇✨️⃝•┇【.راتـب】➥*
*⏎┇✨️⃝•┇【.لــفــل】➥*
*⏎┇✨️⃝•┇【.هجوم】➥*
*⏎┇✨️⃝•┇【.شــراء】➥*
*⧠━──━⧈⇓《✨️》⇓⧈━──━⧠*
*☜┇ حقـوق السيد ديكو ┇〄* 
*☞┇wa.me/201276852952*
*☞┇𝑇𝐸𝑁𝐷𝛩𝑈, 𝐷𝐸𝐾𝑈⁵〖💎〗*
*⧠━──━⧈⇓《✨️》⇓⧈━──━⧠*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م6)$/i
export default handler

