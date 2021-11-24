new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("全世界最美丽最可爱的小公主——温闰筌")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("2021考研一定马到成功，成功上岸！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();