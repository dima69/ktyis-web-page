// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    { 
      title: 'Выставка картин',
      image: 'asd',
      description: 'В КТУИС прошла выставка картин'
    })
}
