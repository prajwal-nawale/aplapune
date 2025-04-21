const categories = [
    {
      name: "Historical Forts",
      items: [
        { id: 1, name: "Sinhagad Fort", img: "https://source.unsplash.com/featured/?sinhagad", description: "A historic hill fortress near Pune known for its significant role in Maratha history." },
        { id: 2, name: "Rajgad Fort", img: "https://source.unsplash.com/featured/?rajgad", description: "The former capital of the Maratha Empire, offering breathtaking views." },
        { id: 3, name: "Torna Fort", img: "https://source.unsplash.com/featured/?torna", description: "The first fort captured by Chhatrapati Shivaji Maharaj, known as Prachandagad." },
        { id: 4, name: "Purandar Fort", img: "https://source.unsplash.com/featured/?purandar", description: "A historical fort where Chhatrapati Shivaji Maharaj was born." },
        { id: 5, name: "Lohagad Fort", img: "https://source.unsplash.com/featured/?lohagad", description: "A UNESCO-listed heritage fort offering stunning trekking opportunities." },
        { id: 6, name: "Visapur Fort", img: "https://source.unsplash.com/featured/?visapur", description: "A twin fort to Lohagad, providing panoramic views of the Sahyadris." },
        { id: 7, name: "Shivneri Fort", img: "https://source.unsplash.com/featured/?shivneri", description: "The birthplace of Chhatrapati Shivaji Maharaj, an important historical landmark." },
        { id: 8, name: "Korigad Fort", img: "https://source.unsplash.com/featured/?korigad", description: "A well-preserved fort near Lonavala, ideal for trekking enthusiasts." },
        { id: 9, name: "Rohida Fort", img: "https://source.unsplash.com/featured/?rohida", description: "Known as Vichitragad, this fort was strategically important for the Marathas." },
        { id: 10, name: "Malhargad Fort", img: "https://source.unsplash.com/featured/?malhargad", description: "The last fort built by the Marathas, offering stunning views of Pune." }
      ],
    },
    {
      name: "Historical Sites",
      items: [
        { id: 11, name: "Raja Dinkar Kelkar Museum", img: "https://source.unsplash.com/featured/?museum", description: "A museum housing a vast collection of Indian artifacts, art, and culture." },
        { id: 12, name: "Parvati Hill", img: "https://source.unsplash.com/featured/?parvati", description: "A scenic hilltop offering panoramic views of Pune along with ancient temples." },
        { id: 13, name: "Mahadji Shinde Chhatri", img: "https://source.unsplash.com/featured/?shinde", description: "A beautiful memorial dedicated to Mahadji Shinde, showcasing Maratha architecture." },
        { id: 14, name: "Vishrambaug Wada", img: "https://source.unsplash.com/featured/?wada", description: "A historic mansion that once served as the residence of Peshwa Bajirao II." },
        { id: 15, name: "Aga Khan Palace", img: "https://source.unsplash.com/featured/?aga-khan-palace", description: "A place of national importance, where Mahatma Gandhi was imprisoned during the freedom struggle." }
      ],
    },
    {
      name: "Temples",
      items: [
        { id: 16, name: "Pataleshwar Temple", img: "https://source.unsplash.com/featured/?cave-temple", description: "An ancient rock-cut cave temple dedicated to Lord Shiva." },
        { id: 17, name: "Chaturshringi Temple", img: "https://source.unsplash.com/featured/?temple", description: "A revered temple located on a hill, dedicated to Goddess Chaturshringi." },
        { id: 18, name: "Kasba Ganapati", img: "https://source.unsplash.com/featured/?ganapati", description: "The presiding deity of Pune, Kasba Ganapati is an important temple in the city." },
        { id: 19, name: "Red Jogeshwari Temple", img: "https://source.unsplash.com/featured/?hindu-temple", description: "A historic temple in Pune known for its red-colored architecture and spiritual importance." },
        { id: 20, name: "Bhuleshwar Temple", img: "https://source.unsplash.com/featured/?bhuleshwar", description: "A unique temple known for its intricate carvings and hidden passageways." },
        { id: 21, name: "Dagdusheth Halwai Ganpati", img: "https://source.unsplash.com/featured/?dagdusheth", description: "One of the most famous Ganesh temples in India, known for its grandeur." },
        { id: 22, name: "Ramdhara Temple", img: "https://source.unsplash.com/featured/?ramdhara", description: "A beautiful temple surrounded by a scenic lake, perfect for a peaceful retreat." },
        { id: 23, name: "ISKCON NVCC Temple", img: "https://source.unsplash.com/featured/?iskcon", description: "A grand ISKCON temple promoting the teachings of Lord Krishna." }
      ],
    },
    {
      name: "Hill Stations",
      items: [
        { id: 24, name: "Lavasa", img: "https://source.unsplash.com/featured/?lavasa", description: "A planned hill city known for its beautiful waterfront and scenic landscapes." },
        { id: 25, name: "Lonavala", img: "https://source.unsplash.com/featured/?lonavala", description: "A popular hill station famous for its waterfalls, caves, and chikki." },
        { id: 26, name: "Khandala", img: "https://source.unsplash.com/featured/?khandala", description: "Located near Lonavala, it offers mesmerizing views and trekking trails." },
        { id: 27, name: "Panchgani", img: "https://source.unsplash.com/featured/?panchgani", description: "A beautiful town known for its strawberry farms and Table Land viewpoint." },
        { id: 28, name: "Malshej Ghat", img: "https://source.unsplash.com/featured/?malshej", description: "A picturesque ghat known for waterfalls, misty mountains, and flamingos." },
        { id: 29, name: "Matheran", img: "https://source.unsplash.com/featured/?matheran", description: "India’s smallest hill station, famous for its toy train and vehicle-free environment." },
        { id: 30, name: "Mahabaleshwar", img: "https://source.unsplash.com/featured/?mahabaleshwar", description: "A stunning hill station known for its lush green valleys and viewpoints." },
        { id: 31, name: "Bhandardara", img: "https://source.unsplash.com/featured/?bhandardara", description: "A serene getaway with lakes, waterfalls, and starry skies for camping." },
        { id: 32, name: "Panhala", img: "https://source.unsplash.com/featured/?panhala", description: "A hill station with historical significance, once ruled by Chhatrapati Shivaji Maharaj." },
        { id: 33, name: "Igatpuri", img: "https://source.unsplash.com/featured/?igatpuri", description: "A lush green hill town known for Vipassana meditation and breathtaking scenery." }
      ],
    }
  ];
  
  export default categories;
  