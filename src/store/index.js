import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    accauntStatus: {
      firstName: 'John',
      lastName: 'Doe',
      role: 'buyer',
      soldPrices: [70000, 150000, 100000, 60000, 130000, 70000],
      favourites: ['7', '3', '2', '5'],
      properties: '',
    },
    isLoggedIn: true,
    properties: [
      {
        id: 1,
        title: 'Dom1',
        type: 'Apartment',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: true,
        images: [
          "https://cdn.pixabay.com/photo/2017/08/06/22/57/living-room-2607128_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/19/17/50/sofa-1845663_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284696_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/08/01/00/28/sofa-2567521_1280.jpg"
        ]
      },
      {
        id: 2,
        title: 'Dom2',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: false,
        images: [
          "https://cdn.pixabay.com/photo/2015/07/02/10/31/interior-828719_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284696_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/12/living-room-2181942_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/15/53/sofa-1846272_1280.jpg"
        ]
      },
      {
        id: 3,
        title: 'Dom3',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: true,
        images: [
          "https://cdn.pixabay.com/photo/2017/02/01/19/58/sofa-2037313_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/15/50/living-room-1846250_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/13/interior-2181943_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284705_1280.jpg"
        ]
      },
      {
        id: 4,
        title: 'Dom4',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: true,
        images: [
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284700_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/19/17/50/sofa-1845664_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/02/01/19/59/sofa-2037315_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/12/living-room-2181941_1280.jpg"
        ]
      },
      {
        id: 5,
        title: 'Dom5',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: false,
        images: [
          "https://cdn.pixabay.com/photo/2015/07/02/10/31/interior-828720_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/08/01/00/28/sofa-2567522_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/15/53/sofa-1846273_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/13/interior-2181944_1280.jpg"
        ]
      },
      {
        id: 6,
        title: 'Dom6',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: true,
        images: [
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284703_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/02/01/19/58/sofa-2037314_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/19/17/50/sofa-1845665_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/12/living-room-2181940_1280.jpg"
        ]
      },
      {
        id: 7,
        title: 'Dom7',
        address: "329 Queensberry Street",
        city: "Jersey City",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dicta nisi, inventore officiis natus doloremque debitis omnis soluta dolor cum atque dolorem odio blanditiis minima quisquam. In consequatur ut eum incidunt sed modi dolor quibusdam dolore officiis nisi laudantium at nobis velit eligendi aspernatur perspiciatis quam assumenda, natus perferendis harum nam. Id dignissimos placeat quibusdam aliquam saepe deleniti rem? Recusandae excepturi, quis laboriosam, reprehenderit velit sunt doloribus labore, aliquam sapiente consequuntur nulla? Minima maiores consectetur qui ratione facilis aliquid mollitia, veritatis ipsam? Corrupti autem dignissimos illum laboriosam rerum quia, consequatur eos commodi magni sed? Deserunt mollitia quisquam voluptate repudiandae aliquid autem minus numquam reprehenderit praesentium eos, minima quis nisi eaque maxime doloremque porro. Assumenda saepe modi vero doloremque minus, maiores ea impedit possimus velit molestias at, repellendus officiis iste quisquam vitae, inventore itaque ipsa labore ducimus tenetur necessitatibus sunt! Eveniet sed ex odio itaque nam minus rem, soluta ullam labore cumque sapiente atque accusantium. Exercitationem provident, nostrum consequatur necessitatibus temporibus repudiandae optio recusandae, soluta, aspernatur quisquam quas maiores. Doloribus aut molestiae est nihil minima praesentium maxime reiciendis soluta numquam tenetur ad labore provident culpa possimus, quos eaque esse eveniet perferendis obcaecati commodi cum. Natus, odio aliquam. Quos quaerat itaque amet eius, officia facere veniam nulla nam dignissimos harum non voluptatem quod sed fuga neque dolorum! Aut deleniti soluta aliquid recusandae corrupti asperiores voluptas numquam illo fuga eveniet perspiciatis, ipsum consectetur accusantium quis sint veritatis. Repellat dolores placeat doloremque cupiditate voluptas rerum dolore voluptatum sed ut minus, voluptatibus vero excepturi tempore perferendis corrupti. Tempore doloremque vel beatae ad tenetur, aspernatur numquam blanditiis rem pariatur maxime odit ducimus eligendi sapiente nobis velit est, quibusdam impedit doloribus eveniet dolorem quod temporibus, libero modi perspiciatis? Harum, explicabo quae! Adipisci, fugit excepturi nihil, repellendus tempora dolore, amet magni debitis numquam minima necessitatibus obcaecati sapiente voluptates.',
        oldPrice: '150.34',
        price: '120.50',
        like: false,
        images: [
          "https://cdn.pixabay.com/photo/2017/02/01/19/59/sofa-2037316_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/15/50/living-room-1846251_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/28/12/13/interior-2181945_1280.jpg",
          "https://cdn.pixabay.com/photo/2016/03/26/13/09/architecture-1284702_1280.jpg"
        ]
      },
    ],
  }),
  actions: {
    changeStatus(userRole, firstName, lastName) {
      this.accauntStatus.role = userRole,
      this.accauntStatus.firstName = firstName,
      this.accauntStatus.lastName = lastName
    }
  },
})
