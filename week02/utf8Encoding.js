// JavaScript本身可通过charCodeAt方法得到一个字符的Unicode编码
// charCodeAt方法得到的应该是一个16位的整数，每个字符占用两字节
// 网络上传输一般采用UTF-8编码
// 有一个简便的办法来实现UTF-8的编码与解码
function UTF_Encoding(string) {
  return Uint8Array.from(
    encodeURIComponent(str).replace(/%(..)/g,
      (m, v) => {
        return String.fromCodePoint(
          parseInt(v, 16))
      }),
    c => c.codePointAt(0)
  )
}