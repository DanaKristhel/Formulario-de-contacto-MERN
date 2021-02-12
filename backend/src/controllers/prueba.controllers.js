const PruebaCtrl={}

PruebaCtrl.obtener=(req, res) => {
    res.send('funcionando desde get')
}
PruebaCtrl.crear=(req, res) => {
    res.send('funcionando desde post')
}
PruebaCtrl.actualizar=(req, res) => {
    res.send('funcionando desde put')
}
PruebaCtrl.eliminar=(req, res) => {
    res.send('funcionando desde delete')
}
PruebaCtrl.crear=async(req, res) => {
    const {name, email, textMessage}=req.body
    const NewRegist=new Contact({
        name,
        email,
        textMessage
    })
    await NewRegist.save()
    res.json({
        mensaje: 'Mensaje enviado'
    })
}

module.exports = PruebaCtrl