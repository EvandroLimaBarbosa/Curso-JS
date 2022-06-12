const videos = [{
    id: 'dasklasdlqw',
    title: 'Teclado mecanico é melhor para programação?',
    views: 5,
    likes: 2
},
{
    id: 'c456zzx65',
    title: 'Pyton na prática',
    views: 5,
    likes: 2
},
{
    id: 'sda65sd4a654asd',
    title: 'As top 7',
    views: 5,
    likes: 2
},
]

const totalViews = videos.reduce((sum, video) => {
    sum.views += video.views
    sum.likes += video.likes
    return sum
}, {views:0, likes:0})

console.log(window.document.getElementById)