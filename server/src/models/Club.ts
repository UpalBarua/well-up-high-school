import { Document, Schema, model } from "mongoose";

type clubDocument = Document & {
  name: string;
  member: number;
  precedent: string;
  vice_precedent: string;
  start_it: Date;
  details: string;
  image1: string;
  image2: string;
  image3: string;
};

const clubSchema = new Schema<clubDocument>({
  name: {
    type: String,
  },
  member: Number,
  precedent: String,
  vice_precedent: String,
  start_it: new Date(),
  details: {
    type: String,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
});

const clubModal = model("Club", clubSchema);

export default clubModal;

// {

//   name: "Art Club",
//   member: 210,
//   precedent: "Sabbir Ahmed",
//   vice_precedent: "Atif Adhor",
//   start_it: 29/05/2022,
//   details: "Art club is a great work for our campus .There are lot of student here who enjoyed art club so much .Art clubs are vibrant communities that bring together individuals who share a common passion for creativity and self-expression. These clubs serve as invaluable platforms for artists of all levels, from beginners seeking a creative outlet to experienced artists looking to refine their skills and showcase their work. With an open and inclusive environment, art clubs offer a wide array of benefits that extend beyond just the canvas.One of the most significant advantages of joining an art club is the opportunity for personal growth and skill development. Members can engage in various art forms, from painting and drawing to sculpture and digital art, under the guidance of experienced artists or teachers. This exposure to diverse techniques and styles allows individuals to broaden their artistic horizons and experiment with new mediums. For beginners, it's a supportive space to start their creative journey, while experienced artists can fine-tune their abilities and learn from their peers.Art clubs foster a sense of belonging and camaraderie among members. Art can often be a solitary endeavor, but the club setting promotes collaboration and community. Sharing ideas, critiques, and feedback with fellow artists can be immensely motivating and inspiring. The club becomes a safe haven where members can freely express themselves and their unique perspectives through their art. This not only enriches their artistic experiences but also helps build lasting friendships.Furthermore, art clubs play a crucial role in promoting art and culture within a community. They organize exhibitions, workshops, and events, which serve as a platform for artists to showcase their work to a broader audience. These events not only celebrate artistic talent but also contribute to the cultural enrichment of the community. Art has the power to spark dialogue, challenge norms, and provoke thought, and art clubs help facilitate these discussions.",

//   image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaK1Tqs0YnjI8DKlxmJa1YxQjFYu2AeWdiRdzAcJNNcqeX9fZy0EkSymF6lUBFIRm_sc&usqp=CAU",
//   image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaK1Tqs0YnjI8DKlxmJa1YxQjFYu2AeWdiRdzAcJNNcqeX9fZy0EkSymF6lUBFIRm_sc&usqp=CAU",
//   image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaK1Tqs0YnjI8DKlxmJa1YxQjFYu2AeWdiRdzAcJNNcqeX9fZy0EkSymF6lUBFIRm_sc&usqp=CAU"

// }
