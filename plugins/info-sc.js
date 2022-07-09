let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 
Nih Link Sc Nya Dibawah :
https://youtu.be/AXPzjQ5jxx8

```Jangan lupa follow tiktokku juga ya :v```
https://vt.tiktok.com/ZSRJsVYBX/`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', 'menu', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
