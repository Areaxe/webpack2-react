let data = [
    {
        title: '一级目录',
        id: 1,
        children: [
            {
                title: '二级内容',
                id: 12,
                content_html: '<div>aaaaaa</div>',
                children: [
                    {
                        title: '三级内容',
                        content_html: '<div>aaaaaa</div>',
                        id: 13
                    }
                ]
            },
            {
                title: '二级目录',
                id: 2,
                children: [
                    {
                        title: '三级目录',
                        id: 21,
                        children: [
                            {
                                title: '四级内容',
                                id: 211,
                                content_html: '<div>aaaaaa</div>',
                                children: [
                                    {
                                        title: '五级内容',
                                        content_html: '<div>aaaaaa</div>',
                                        id: 21111
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        title: '一级目录',
        id: 3,
        children: [
            {
                title: '二级内容',
                id: 31,
                content_html: '<div>aaaaaa</div>',
                children: [
                    {
                        title: '三级目录',
                        id: 32
                    }
                ]
            },
            {
                title: '二级内容',
                id: 4,
                content_html: '<div>aaaaaa</div>',
                children: [
                    {
                        title: '三级内容',
                        content_html: '<div>aaaaaa</div>',
                        id: 41
                    }
                ]
            },
        ]
    },
]
export default data