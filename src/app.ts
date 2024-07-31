import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys"
import { createBot, createProvider, createFlow, MemoryDB } from '@bot-whatsapp/bot'
import QRPortalWeb from '@bot-whatsapp/portal'
import Cors from 'cors'

const corsOptions = {
    origin: 'https://main.d3rrj4e0k1dvra.amplifyapp.com', // Reemplaza con tu dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Si necesitas enviar cookies
};

const main = async () => {
    const provider = createProvider(BaileysProvider)
    provider.http?.server.use(Cors(corsOptions))
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

    // QRPortalWeb()

}

main()