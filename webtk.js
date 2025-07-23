// WebTK Source Code
// WebTK version: 0.0.1
// WebTK can be edited and distributed by anyone, as long as you credit me.
// Copy and paste the comment below on your version of WebTK to credit me:
// Original made by ccjit with JavaScript, her site: https://ccjit.github.io/my-site

let webtk = {
    create: {
        text: (text, id, newline, size) => {
            if (!text) text = "Placeholder Text"
            if (!id) id = "text" + JSON.stringify(Math.floor(Math.random()*1e+10))
            if (!size) size = 3
            if (newline == undefined || newline == null) newline = true
            let p = document.createElement('font')
            p.id = id
            p.innerHTML = text
            p.setAttribute('size', size)
            document.body.append(p)
            if (newline) {
                let br = p.after()
                br.id = 'br' + document.getElementsByTagName('br').length
                document.body.append(br)
            }
        },
        heading: (text, id, size) => {
            if (!text) text = "Placeholder Heading"
            if (!id) id = "head" + JSON.stringify(Math.floor(Math.random()*1e+10))
            if (!size) size = 1
            if (size > 6) size = 6
            if (size < 1) size = 1

            let h = document.createElement(`h${size}`)
            h.id = id
            h.innerHTML = text
            document.body.append(h)
        }
    },
    set: {
        title: (text) => {
            if (document.head.getElementsByTagName('title').length > 0) {
                let title = document.getElementsByTagName('title')[0]
                title.innerHTML = text
                title.id = 'page-title'
            } else {
                let title = document.createElement('title')
                title.innerHTML = text
                title.id = "page-title"
                document.head.append(title)
            }
        },
        element: (id, options) => {
            if (!id) throw 'Error: Please specify an element\'s ID.'
            if (!options) options = {}
            let mod = document.getElementById(id)
            if (!mod) throw 'Error: Please specify an existing element.'
            for (let i = 0; i < Object.keys(options).length; i++) {
                mod[Object.keys(options)[i]] = Object.values(options)[i]
            }
        }
    },
    delete: (id) => {
        let del = document.getElementById(id)
        if (!del) throw 'ReferenceError: That element does not exist. Maybe try searching for another element?'
        del.remove()
    }
}
