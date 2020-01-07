const handlers = []

handlers.push(async (ctx, next) => {
    const context = ctx.payload.content || ''
    if (!/^google/i.test(context)) {
        return next()
    }
    const keywords = context.substring('google'.length, context.length).trim()
    if (!keywords) {
        ctx.text('关键词缺失')
        return
    }
    let result = 'nano生成了搜索链接：' + keywords
    result += '\n' + 'https://www.google.com/search?q=' + encodeURIComponent(keywords)
    ctx.text(result)
})

export const help = 'google [关键词] 使用Google搜索'
export default handlers
