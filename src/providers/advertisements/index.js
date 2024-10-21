import { createContext, useState } from "react";

export const AdvertisementsContext = createContext([]);

export const AdvertisemenstProvider = ({ children }) => {
  const [advertisements] = useState([
    {
      id: "4bc0b3c8-ff97-441e-8357-054704464585",
      type: "sale",
      title: "Honda Titan CG 160",
      year: 2022,
      mileage: 0,
      price: "19990.00",
      description:
        "Inspirada nas motos esportivas de alta performance, a CG 160 Titan 2022 tem ousadia e sofisticação. Com um design marcante e inovador, esse modelo tem estilo de sobra!",
      vehicle_type: "motorcycle",
      is_active: true,
      images: {
        id: "48d8005b-0f30-460e-989d-db71bae2a316",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665473907583.png",
        is_front: true,
      },
      owner: {
        id: "c734189d-a16c-4e05-b486-61edec47bbc5",
        name: "Amanda Silva",
      },
    },
    {
      id: "af55e8f0-d3a8-42c2-b654-b8f231b41ee2",
      type: "sale",
      title: "Yamaha XTZ 250 Lander",
      year: 2021,
      mileage: 250,
      price: "23900.00",
      description:
        "Seja na cidade ou em viagens, incluindo estradas de terra, a Lander 250 proporciona um show quando o assunto é agilidade.\r\nEla é rápida e fácil de pilotar, graças a sua ciclística bem elaborada e a boa calibragem das suspensões, que transmitem suavidade sem comprometer a esportividade.",
      vehicle_type: "motorcycle",
      is_active: true,
      images: {
        id: "b1b5bcb4-c409-411c-b52d-99809f505b9c",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665474702859.png",
        is_front: true,
      },
      owner: {
        id: "97ca9f8b-d374-4d30-828e-0cd88a35e264",
        name: "Pedro",
      },
    },
    {
      id: "cd81d6d2-c71a-4bbe-b2f3-50faca921e99",
      type: "sale",
      title: "Yamaha YBR 150 Factor",
      year: 2022,
      mileage: 50,
      price: "15500.00",
      description:
        "Moto com motor de 4 tempos, cambio de 5 marchas, refrigeração de ar, 150cc e injeção eletrônica.",
      vehicle_type: "motorcycle",
      is_active: true,
      images: {
        id: "37a91f57-0978-4c60-ba57-c87b46d21d05",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665475960063.png",
        is_front: true,
      },
      owner: {
        id: "97ca9f8b-d374-4d30-828e-0cd88a35e264",
        name: "Pedro",
      },
    },
    {
      id: "678e8c63-7c0f-4c04-8556-e3ead610a593",
      type: "sale",
      title: "Fiat Mobi",
      year: 2021,
      mileage: 0,
      price: "63000.00",
      description:
        "Carro com um desgin jovem pensado para encarar as ruas e avenidas com muita presença e estilo.",
      vehicle_type: "car",
      is_active: true,
      images: {
        id: "bf6b30db-7f84-47a4-9886-1234e06215d2",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665435502338.png",
        is_front: true,
      },
      owner: {
        id: "2bb88e26-dc9b-4690-b17f-64e991dadf6c",
        name: "Gui",
      },
    },
    {
      id: "2ecaeb73-689d-412d-8a11-cb65205dea9e",
      type: "sale",
      title: "Honda NXR 160 Bros",
      year: 2022,
      mileage: 296,
      price: "18800.00",
      description:
        "Moto com design arrojado, protetor de suspensão e motor de 160cc, ela traz economia e conforto para você pilotar por horas dentro ou fora da cidade.",
      vehicle_type: "motorcycle",
      is_active: true,
      images: {
        id: "9b25579d-83d7-42b0-82cc-832969ed5d4b",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665466683742.png",
        is_front: true,
      },
      owner: {
        id: "c734189d-a16c-4e05-b486-61edec47bbc5",
        name: "Amanda Silva",
      },
    },
    {
      id: "b27b1893-9545-49de-9d43-cf865b60f44c",
      type: "sale",
      title: "Celta",
      year: 2015,
      mileage: 250,
      price: "30000.00",
      description:
        "Carro popular, prateado, 4 portas, seminovo, manual de 5 marchas, tração dianteira e direção hidráulica",
      vehicle_type: "car",
      is_active: true,
      images: {
        id: "ee240bc1-75b1-401a-9f7a-9b6a688441b7",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665467650660.png",
        is_front: true,
      },
      owner: {
        id: "c734189d-a16c-4e05-b486-61edec47bbc5",
        name: "Amanda Silva",
      },
    },
    {
      id: "2d9a7daf-3518-46ad-b117-3f71f19f3819",
      type: "sale",
      title: "Fiat Strada",
      year: 2022,
      mileage: 100,
      price: "105000.00",
      description:
        "Picape de cabine dupla, com design inspirado na irmã maior Fiat Toro e no subcompacto Fiat Mobi, o veículo oferece também a nova central multimídia UConnect de 7 polegadas, controle de tração e estabilidade, assistente de partida em rampa, ar-condicionao, direção hidráulico (elétrico a partir da Freedom), computador de bordo, luz de condução diurna (DRL), porta escada, caçamba com protetor, iluminação e tampa com alívio de peso.",
      vehicle_type: "car",
      is_active: true,
      images: {
        id: "0274d324-b710-4b07-b005-41901d62f4f3",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665468567335.png",
        is_front: true,
      },
      owner: {
        id: "2bb88e26-dc9b-4690-b17f-64e991dadf6c",
        name: "Gui",
      },
    },
    {
      id: "1b9155cc-0695-4b00-a5e9-ecc397edce1a",
      type: "sale",
      title: "Hyundai HB20",
      year: 2021,
      mileage: 200,
      price: "74500.00",
      description:
        "Carro completo, econômico, confortável, com ótimo acabamento interno e motor 1.0 turbo.",
      vehicle_type: "car",
      is_active: true,
      images: {
        id: "2eabb416-430d-4211-8538-797c0e9b1202",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665471365200.png",
        is_front: true,
      },
      owner: {
        id: "97ca9f8b-d374-4d30-828e-0cd88a35e264",
        name: "Pedro",
      },
    },
    {
      id: "68852252-0c0b-4f79-a1a2-f9535b8f1545",
      type: "sale",
      title: "Yamaha Fazer FZ25",
      year: 2022,
      mileage: 0,
      price: "23500.00",
      description:
        "Moto com pistão forjado em alumínio e cilindro revestido em cerâmica, econômica e com alta durabilidade, sistema ABS nas duas rodas e posição de pilotagem confortável.",
      vehicle_type: "motorcycle",
      is_active: true,
      images: {
        id: "e65a896e-5f3b-4791-82bf-d02bcfd08407",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665472096502.png",
        is_front: true,
      },
      owner: {
        id: "97ca9f8b-d374-4d30-828e-0cd88a35e264",
        name: "Pedro",
      },
    },
    {
      id: "c11fc1fa-fae6-4998-ac42-a990d9b31722",
      type: "sale",
      title: "Onix",
      year: 2022,
      mileage: 150,
      price: "78000.00",
      description:
        'Carro com motor turbo, easy entry, rodas de liga leve de 16" e 6 airbags de série para forte segurança dos passageiros.',
      vehicle_type: "car",
      is_active: true,
      images: {
        id: "955ecc4c-fc72-448a-893c-1ac9e5acbb54",
        url: "https://storage.googleapis.com/motors-shop.appspot.com/1665473348294.png",
        is_front: true,
      },
      owner: {
        id: "c734189d-a16c-4e05-b486-61edec47bbc5",
        name: "Amanda Silva",
      },
    },
  ]);

  return (
    <AdvertisementsContext.Provider value={{ advertisements }}>
      {children}
    </AdvertisementsContext.Provider>
  );
};
