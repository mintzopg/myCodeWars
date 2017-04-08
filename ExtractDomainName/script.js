/**
 * Created by gimin on 4/9/17.
 */

function domainName(url) {
    let re = /(^|, )(http[s]?:\/{2}([w]{3}.)?|www.)/g
    let str = url.replace(re, '')

    re = /(^|, )((?=\S*['-])([a-zA-Z0-9'-]+)|\w+)/g
    str = str.match(re)[0]
    return str

}

// Tests
console.log(domainName("http://google.com"), // "google"
    domainName("http://google.co.jp"), // "google"
    domainName("www.xakep.ru"), // "xakep"
    domainName("http://www.youtube.com"), // "youtube"
    domainName("www.codeWars.com"),
    domainName("www.hyphen-site.eu"),
    domainName('https://www.dqs6sohe95gix7c-1ej0.it')
)
