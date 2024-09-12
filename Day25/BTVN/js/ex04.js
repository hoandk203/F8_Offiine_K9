var posts= [
    [
        'https://picsum.photos/200/150',
        'Tieu de bai viet 1',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quamrepellendus dolores harum sit, laudantium delectus quisquam amet atque.'
    ],
    [
        'https://picsum.photos/200/150',
        'Tieu de bai viet 2',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quamrepellendus dolores harum sit, laudantium delectus quisquam amet atque.'
    ],
    [
        'https://picsum.photos/200/150',
        'Tieu de bai viet 3',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quamrepellendus dolores harum sit, laudantium delectus quisquam amet atque.'
    ],
    [
        'https://picsum.photos/200/150',
        'Tieu de bai viet 4',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quamrepellendus dolores harum sit, laudantium delectus quisquam amet atque.'
    ]
]

function renderToHTML(posts){
    var something= posts.map(function(post,index){
        if(index % 2 !== 0){
            return `<div class="post flex">
                    <img class="order-1" src="${post[0]}"></img>
                    <div class="post-text">
                        <h2>${post[1]}</h2>
                        <p>${post[2]}</p>  
                    </div>      
                </div>
        `;
        }
        return `<div class="post flex">
                    <img src="${post[0]}"></img>
                    <div class="post-text">
                        <h2>${post[1]}</h2>
                        <p>${post[2]}</p>  
                    </div>      
                </div>
        `;
    }).join('');
    
    document.body.innerHTML= something;
}

renderToHTML(posts);