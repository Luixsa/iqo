export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/997187785154908311/1015831633796018286/miyanom.jpg",
      name: "Miyano Bot",
      description: "Are you ready to throw the best parties with Miyano, the best and most up-to-date bot?",
      link: "https://www.miyano.ml",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/997187785154908311/1015836301037142118/Man_PP_Gif_15.gif",
      name: "iqo",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management.",
      link: "https://discord.gg/J69KSqvGeq",
    }
  ];
  res.status(200).json(data);
};
