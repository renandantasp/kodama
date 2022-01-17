export const url_parser = (ctx) => {
  let url = ''
  url = process.env.rawgUrl + 'games' + process.env.rawgKey

  if (Object.keys(ctx.query).length == 0){
    console.log('vazio')
  }else{
    let query = ''
    for (var prop in ctx.query){
     query = query + '&' + prop + '=' + ctx.query[prop]
    }
    url = url + query
  }
  return url
}