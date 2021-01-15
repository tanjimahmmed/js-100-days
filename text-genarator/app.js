const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero, voluptates sapiente dolorum optio eveniet delectus dolorem mollitia, ullam labore illo cumque quo, nobis quam placeat error officiis. Sit, recusandae. Facilis tenetur, perferendis, eveniet odio velit minima unde reprehenderit esse ab, quae numquam doloremque quisquam architecto exercitationem obcaecati veniam ad.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime aspernatur molestiae amet odit ratione, voluptates veniam quo. Dicta rem debitis perferendis nemo, nam porro ullam quibusdam, hic iusto dolorum, quod eveniet aliquam error reprehenderit illum illo voluptatum! Harum, animi voluptate laudantium temporibus impedit facere. Quam odit quae alias deleniti dolor, ipsa illum aut odio minus veniam necessitatibus aspernatur omnis voluptates delectus sed culpa voluptate distinctio consectetur quibusdam deserunt? Odit assumenda officiis quo expedita nobis ea inventore nam atque nisi. Eveniet minus ad maxime quibusdam aut, dolores ullam dolorem, autem blanditiis facilis ducimus delectus est quos quas eligendi praesentium vel.
    `,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero, voluptates sapiente dolorum optio eveniet delectus dolorem mollitia, ullam labore illo cumque quo, nobis quam placeat error officiis. Sit, recusandae. Facilis tenetur, perferendis, eveniet odio velit minima unde reprehenderit esse ab, quae numquam doloremque quisquam architecto exercitationem obcaecati veniam ad.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime aspernatur molestiae amet odit ratione, voluptates veniam quo. Dicta rem debitis perferendis nemo, nam porro ullam quibusdam, hic iusto dolorum, quod eveniet aliquam error reprehenderit illum illo voluptatum! Harum, animi voluptate laudantium temporibus impedit facere. Quam odit quae alias deleniti dolor, ipsa illum aut odio minus veniam necessitatibus aspernatur omnis voluptates delectus sed culpa voluptate distinctio consectetur quibusdam deserunt? Odit assumenda officiis quo expedita nobis ea inventore nam atque nisi. Eveniet minus ad maxime quibusdam aut, dolores ullam dolorem, autem blanditiis facilis ducimus delectus est quos quas eligendi praesentium vel.
    `,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero, voluptates sapiente dolorum optio eveniet delectus dolorem mollitia, ullam labore illo cumque quo, nobis quam placeat error officiis. Sit, recusandae. Facilis tenetur, perferendis, eveniet odio velit minima unde reprehenderit esse ab, quae numquam doloremque quisquam architecto exercitationem obcaecati veniam ad.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime aspernatur molestiae amet odit ratione, voluptates veniam quo. Dicta rem debitis perferendis nemo, nam porro ullam quibusdam, hic iusto dolorum, quod eveniet aliquam error reprehenderit illum illo voluptatum! Harum, animi voluptate laudantium temporibus impedit facere. Quam odit quae alias deleniti dolor, ipsa illum aut odio minus veniam necessitatibus aspernatur omnis voluptates delectus sed culpa voluptate distinctio consectetur quibusdam deserunt? Odit assumenda officiis quo expedita nobis ea inventore nam atque nisi. Eveniet minus ad maxime quibusdam aut, dolores ullam dolorem, autem blanditiis facilis ducimus delectus est quos quas eligendi praesentium vel.
    `,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero, voluptates sapiente dolorum optio eveniet delectus dolorem mollitia, ullam labore illo cumque quo, nobis quam placeat error officiis. Sit, recusandae. Facilis tenetur, perferendis, eveniet odio velit minima unde reprehenderit esse ab, quae numquam doloremque quisquam architecto exercitationem obcaecati veniam ad.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime aspernatur molestiae amet odit ratione, voluptates veniam quo. Dicta rem debitis perferendis nemo, nam porro ullam quibusdam, hic iusto dolorum, quod eveniet aliquam error reprehenderit illum illo voluptatum! Harum, animi voluptate laudantium temporibus impedit facere. Quam odit quae alias deleniti dolor, ipsa illum aut odio minus veniam necessitatibus aspernatur omnis voluptates delectus sed culpa voluptate distinctio consectetur quibusdam deserunt? Odit assumenda officiis quo expedita nobis ea inventore nam atque nisi. Eveniet minus ad maxime quibusdam aut, dolores ullam dolorem, autem blanditiis facilis ducimus delectus est quos quas eligendi praesentium vel.
    `,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero, voluptates sapiente dolorum optio eveniet delectus dolorem mollitia, ullam labore illo cumque quo, nobis quam placeat error officiis. Sit, recusandae. Facilis tenetur, perferendis, eveniet odio velit minima unde reprehenderit esse ab, quae numquam doloremque quisquam architecto exercitationem obcaecati veniam ad.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime aspernatur molestiae amet odit ratione, voluptates veniam quo. Dicta rem debitis perferendis nemo, nam porro ullam quibusdam, hic iusto dolorum, quod eveniet aliquam error reprehenderit illum illo voluptatum! Harum, animi voluptate laudantium temporibus impedit facere. Quam odit quae alias deleniti dolor, ipsa illum aut odio minus veniam necessitatibus aspernatur omnis voluptates delectus sed culpa voluptate distinctio consectetur quibusdam deserunt? Odit assumenda officiis quo expedita nobis ea inventore nam atque nisi. Eveniet minus ad maxime quibusdam aut, dolores ullam dolorem, autem blanditiis facilis ducimus delectus est quos quas eligendi praesentium vel.
    `
];

const form = document.querySelector('.lorem_form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem_text');

form.addEventListener('submit', function (e) {
    e.preventDefault();
   const value = parseInt(amount.value);
   const random = Math.floor(Math.random() * text.length);

//    empty
// -1
// > 9
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`;
        })
        .join('');
        result.innerHTML = tempText;
    };
});