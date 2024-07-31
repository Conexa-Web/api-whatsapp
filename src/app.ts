import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys"
import { createBot, createProvider, createFlow, MemoryDB } from '@bot-whatsapp/bot'

import QRPortalWeb from '@bot-whatsapp/portal'

const main = async () => {
    const provider = createProvider(BaileysProvider)

    provider.initHttpServer(3002)
    provider.http?.server.post('/send',handleCtx(async (bot,req,res)=>{
        console.log(req.body)
        const phone = req.body.phone
        const message = req.body.message
        await bot.sendMessage(phone,message,{})
        res.end()
    }))

    await createBot({
        flow: createFlow([]),   
        database: new MemoryDB(),
        provider
    })

    QRPortalWeb()

}

main()