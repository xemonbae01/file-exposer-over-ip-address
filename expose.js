const express=require('express')
const serveIndex=require('serve-index')
const path=require('path')
const os=require('os')
const fs=require('fs')
const mime=require('mime-types')

const app=express()
const PORT=8080
const ROOT_DIR=path.join(process.env.HOME,'storage')

const interfaces=os.networkInterfaces()
let ipAddress='localhost'
for(let iface of Object.values(interfaces)){
    for(let details of iface){
        if(details.family==='IPv4'&&!details.internal){
            ipAddress=details.address
        }
    }
}

console.log(`Server starting! Connect via http://${ipAddress}:${PORT}`)

app.use((req,res,next)=>{
    const filePath=path.join(ROOT_DIR,req.path)
    fs.stat(filePath,(err,stats)=>{
        if(err)return next()
        if(stats.isFile()){
            const type=mime.lookup(filePath)||'application/octet-stream'
            if(type.startsWith('image/')||type.startsWith('video/')||type.startsWith('audio/')){
                res.setHeader('Content-Type',type)
                fs.createReadStream(filePath).pipe(res)
            }else if(type==='application/json'||type==='application/javascript'||type==='text/plain'||type==='text/html'){
                fs.readFile(filePath,'utf8',(e,data)=>{
                    if(e)return next()
                    const escaped=data.replace(/</g,'&lt;').replace(/>/g,'&gt;')
                    res.send(`<html><head><meta charset="utf-8"><title>${path.basename(filePath)}</title><style>body{font-family:monospace;white-space:pre;}</style></head><body>${escaped}</body></html>`)
                })
            }else{
                res.download(filePath)
            }
        }else next()
    })
})

app.use(express.static(ROOT_DIR))
app.use(serveIndex(ROOT_DIR,{icons:true}))

app.listen(PORT,()=>{
    console.log('Made By Redwan With Brain sucking Curiosity 🎀')
    console.log(`File exposer is ready at http://${ipAddress}:${PORT}`)
    console.log('Browse storage and media from other devices on your hotspot or local network connection.')
})
