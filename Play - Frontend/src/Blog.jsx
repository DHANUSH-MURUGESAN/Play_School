import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import kid from "./assets/kid-2.jpg";
import kidsplayhome from "./assets/kidsplayhome.jpg";
import kidhealth from "./assets/kidhealthyfood.jpg";
import kidstory from "./assets/kidstory.jpg";
import parentencouragekid from "./assets/parentencouragekid.jpg";
import playchild from "./assets/playchild.jpg";
import musickid from "./assets/musickid.jpg";
import parenttip from "./assets/parenttip.jpg";
import outdoorplay from "./assets/outdoorplykid.jpg";
import kidsconfidence from "./assets/kidsconfidence.jpg";
import digitalsafe from "./assets/digitalsafe.jpg";
import { useParams } from "react-router";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you don't want animation
    });
  }, []);
  const blogData = [
    {
      id: 1,
      title: "The Importance of Early Childhood Education",
      date: "September 30, 2025",
      image: kid,
      description:
        "Early education plays a crucial role in shaping a child’s future. Learn how play-based learning improves creativity and confidence.",
      content: `Early education plays a crucial role in shaping a child’s future. Learn how play-based learning improves creativity and confidence.

Childhood is often described as the foundation of life, and the experiences children have in their early years significantly influence the adults they will become. Early childhood education is not just about teaching letters, numbers, or colors—it is about laying the groundwork for lifelong learning, emotional well-being, and social development. During these formative years, children are naturally curious, energetic, and eager to explore the world around them. A structured yet nurturing environment allows this curiosity to blossom into meaningful skills that support their academic, personal, and social growth.

One of the most powerful aspects of early education is play-based learning. When children engage in activities like building blocks, role-playing, or storytelling, they are not only having fun but also developing problem-solving abilities, creativity, and communication skills. For instance, when two children share toys or work together on a puzzle, they practice teamwork, patience, and empathy. These experiences, though simple, help shape a child’s ability to cooperate with others, resolve conflicts, and build healthy relationships later in life.

Another key benefit of early education is the boost in self-confidence. Children who are encouraged to try new activities, express their ideas, and make small decisions feel valued and capable. This sense of achievement nurtures self-esteem, which is vital for future success. A child who learns to confidently recite a rhyme in front of peers or proudly show their artwork to teachers and parents develops resilience and a positive attitude toward challenges. These small victories create a mindset that says, “I can do it,” which continues throughout their educational journey.

Cognitive development is also strongly linked to early learning experiences. Exposure to storytelling, songs, and creative play enhances vocabulary and language skills. Hands-on activities like sorting, counting, and identifying shapes build the foundation for math and logical thinking. Scientific curiosity is sparked when children observe nature, experiment with water and sand, or ask “why” questions. These moments of exploration, guided by supportive teachers, prepare children for more formal academics while keeping learning joyful and engaging.

Equally important is the emotional and social growth that comes with early education. Classrooms and playgroups provide children with opportunities to interact with peers from diverse backgrounds. They learn to share, take turns, express emotions, and respect differences. Teachers act as guides, helping children manage feelings like frustration, excitement, or disappointment. Over time, this emotional intelligence becomes as valuable as academic skills, ensuring that children grow into compassionate and adaptable individuals.

Parents also benefit from early childhood education programs. A strong partnership between educators and families allows parents to better understand their child’s strengths, challenges, and interests. Regular updates, parent-teacher meetings, and collaborative activities create a support system that extends beyond the classroom. This holistic approach ensures that children feel secure, loved, and motivated in all areas of life.

In conclusion, early childhood education is far more than a stepping stone to school—it is the foundation upon which a lifetime of success is built. By fostering creativity, confidence, social skills, and curiosity, it empowers children to thrive both inside and outside the classroom. Investing in these precious early years means investing in a brighter, more capable future generation.`,
    },
    {
      id: 2,
      title: "Fun Activities for Kids at Home",
      date: "September 7, 2025",
      image: kidsplayhome,
      description:
        "Keeping kids engaged at home can be both fun and meaningful. Simple DIY activities can spark creativity while making learning enjoyable. From colorful arts and crafts to playful indoor games, children explore new skills every day.",
      content: `Keeping kids engaged at home can be both fun and meaningful. Simple DIY activities can spark creativity while making learning enjoyable. From colorful arts and crafts to playful indoor games, children explore new skills every day.

One of the best ways to engage children is through creative arts and crafts. With basic supplies like paper, crayons, glue, and scissors, kids can make greeting cards, origami animals, or even simple decorations for their rooms. These activities not only keep them busy but also help improve fine motor skills, creativity, and imagination.

Storytelling and puppet shows are another fantastic way to entertain kids while encouraging language development. Parents can create simple hand puppets using socks or paper bags, and children can put on their own mini-theater shows. This builds communication skills, boosts confidence, and gives them the freedom to express ideas in a playful manner.

Indoor treasure hunts are a fun and exciting activity that children love. Parents can hide small toys, treats, or clues around the house, leading to a surprise prize at the end. Adding themes such as pirates or detectives makes the game even more thrilling. Treasure hunts help children practice problem-solving, observation, and teamwork.

Cooking together can also be an enjoyable learning experience. Simple, no-fire recipes like fruit salads, sandwiches, or milkshakes allow kids to explore ingredients, learn about nutrition, and develop life skills. Plus, children take pride in eating food they helped prepare, which encourages healthy eating habits.

Music and dance are wonderful tools for energy release and fun. Kids can create their own dance moves, play freeze dance, or even use everyday household items as musical instruments. This not only keeps them active but also develops rhythm, coordination, and self-expression.

Finally, simple science experiments can spark curiosity and learning. Mixing baking soda with vinegar to create a mini-volcano or growing beans in a jar of cotton are exciting experiments that teach children about cause and effect while fueling a love for science.

In conclusion, fun activities at home are more than just entertainment—they provide opportunities for children to learn new skills, boost creativity, and strengthen family bonds. With a little imagination, parents can turn everyday moments into joyful learning experiences that their kids will remember for years.`,
    },
    {
      id: 3,
      title: "Healthy Meals for Little Ones",
      date: "August 17, 2025",
      image: kidhealth,
      description:
        "A balanced diet helps kids stay active and focused. Discover easy and nutritious recipes your children will love. These simple meals also encourage healthy eating habits from a young age.",
      content: `A balanced diet helps kids stay active and focused. Discover easy and nutritious recipes your children will love. These simple meals also encourage healthy eating habits from a young age.

Good nutrition is the foundation for a child’s growth and development. During the early years, children need the right balance of proteins, carbohydrates, healthy fats, vitamins, and minerals to build strong bones, improve concentration, and support their overall health. Providing meals that are both tasty and healthy may seem challenging, but with a little planning, parents can make it an enjoyable process.

Breakfast is often called the most important meal of the day, and for kids, it truly sets the tone for energy and focus. Options like whole-grain pancakes with fruit, oatmeal with nuts and honey, or vegetable-stuffed omelets provide a nutritious start while being delicious. Avoiding sugary cereals and instead offering fiber-rich foods helps maintain steady energy throughout the morning.

Snacks also play a vital role in a child’s diet. Instead of chips or chocolates, parents can prepare quick and healthy snacks like yogurt with berries, carrot sticks with hummus, or homemade granola bars. These snacks are rich in nutrients and also help kids develop healthier eating habits compared to processed alternatives.

Lunch and dinner should focus on a balance of food groups. A typical plate might include whole grains like brown rice or whole-wheat chapati, a portion of lean protein such as chicken, fish, or lentils, and plenty of vegetables. Including colorful vegetables ensures a variety of vitamins and minerals while making the meal visually appealing to children.

One fun way to get kids interested in food is to involve them in the cooking process. Allowing them to help wash vegetables, mix ingredients, or even choose a meal for the day gives them ownership and excitement about what they eat. Children are more likely to try new foods when they feel included in preparing them.

Hydration is another important part of healthy eating. Instead of sugary sodas or packaged juices, encourage children to drink water, milk, or fresh fruit juices. This not only keeps them hydrated but also reduces the intake of unnecessary sugar.

It’s also important to remember that healthy eating is about balance, not perfection. Occasional treats like homemade cookies or ice cream can be enjoyed without guilt, as long as they are balanced with nutritious meals. Teaching moderation helps children develop a healthy relationship with food.

In conclusion, preparing healthy meals for little ones is not just about providing nutrition—it is about building lifelong habits. With simple, fun, and balanced meal ideas, parents can ensure their children grow strong, stay active, and enjoy eating in a way that supports both their body and mind.`,
    },
    {
      id: 4,
      title: "The Benefits of Storytelling for Kids",
      date: "August 3, 2025",
      image: kidstory,
      description:
        "Storytelling helps kids develop imagination, language skills, and moral values. Here’s why it’s an essential part of learning.",
      content: `Storytelling helps kids develop imagination, language skills, and moral values. Here’s why it’s an essential part of learning.

From ancient times to modern classrooms, storytelling has remained one of the most powerful ways to teach, inspire, and connect with children. Stories do more than entertain—they shape young minds, spark creativity, and introduce children to values and lessons that guide them throughout life.

One of the biggest benefits of storytelling is the way it fuels imagination. When children listen to a story, they picture the characters, settings, and events in their minds. This mental exercise strengthens creativity and encourages them to think beyond what they see in everyday life. Imaginative thinking developed through storytelling can later help children with problem-solving, innovation, and critical thinking.

Storytelling also plays a crucial role in language development. As children listen to stories, they are exposed to new vocabulary, sentence structures, and ways of expression. This naturally enhances their listening and speaking skills. For example, a child who hears words like "bravery," "curiosity," or "kindness" in a story will soon begin to use them in conversation. Over time, storytelling builds strong communication skills that are essential in school and social interactions.

Another important benefit is the development of moral values and empathy. Stories often include themes of good versus bad, honesty, sharing, or kindness. When children listen to these narratives, they learn the difference between right and wrong in a safe and meaningful way. They also begin to understand emotions by relating to the struggles or happiness of the characters. This helps them grow into compassionate and thoughtful individuals.

Storytelling also strengthens the bond between parents and children. Whether it’s a bedtime story or a shared reading session during the day, these moments create closeness and trust. The simple act of reading together helps children feel loved, secure, and valued. Moreover, storytelling gives parents a chance to pass down traditions, culture, and family history, connecting children to their roots.

In the classroom, storytelling can make learning more engaging. Teachers often use stories to explain difficult concepts or to encourage curiosity about history, science, and even mathematics. A story about a brave explorer can make geography exciting, while a tale about sharing food can introduce math concepts like counting and division. This blend of fun and learning ensures that children remain attentive and retain knowledge better.

Equally important, storytelling encourages active participation. Children often ask questions, predict what might happen next, or even create their own endings to stories. This builds confidence and helps them become active learners rather than passive listeners.

In conclusion, storytelling is far more than entertainment—it is a vital tool for developing imagination, language, empathy, and moral understanding in children. By weaving creativity with values, storytelling lays a strong foundation for learning and growth. Whether told at home, in school, or during playtime, stories continue to be a magical way to inspire young minds and prepare them for the world ahead.`,
    },
    {
      id: 5,
      title: "Tips for Parents to Encourage Creativity",
      date: "July 26, 2025",
      image: parentencouragekid,
      description:
        "Simple activities at home like art, music, and role play can help your child think outside the box and explore new ideas.",
    },
    {
      id: 6,
      title: "The Role of Play in Child Development",
      date: "July 10, 2025",
      image: playchild,
      description:
        "Play is more than just fun — it’s how kids learn and grow. From building blocks to outdoor games, play strengthens creativity, problem-solving, and social skills.",
    },
    {
      id: 7,
      title: "How Music Boosts Learning in Kids",
      date: "July 2, 2025",
      image: musickid,
      description:
        "Music enhances memory, focus, and emotional development. Singing rhymes, dancing, or playing instruments can make learning exciting and joyful for children.",
    },
    {
      id: 8,
      title: "Parent Tips for a Smooth School Morning",
      date: "June 25, 2025",
      image: parenttip,
      description:
        "Busy mornings can be stressful! Simple routines like preparing bags the night before and healthy breakfast ideas can make school mornings happy and stress-free.",
    },
    {
      id: 9,
      title: "Why Outdoor Play is Essential",
      date: "June 12, 2025",
      image: outdoorplay,
      description:
        "Fresh air, running, and team games boost children’s fitness and social skills. Outdoor play helps reduce stress and keeps kids physically and mentally active.",
    },
    {
      id: 10,
      title: "Helping Kids Build Confidence",
      date: "May 28, 2025",
      image: kidsconfidence,
      description:
        "Confidence is the foundation for success. Encouraging kids to try new things, praising effort, and supporting them through challenges helps build strong self-esteem.",
    },
    {
      id: 11,
      title: "Digital Safety for Young Learners",
      date: "May 12, 2025",
      image: digitalsafe,
      description:
        "Technology is everywhere, but kids need guidance. Learn safe screen-time habits, child-friendly apps, and how to protect your little ones online.",
    },
    {
      id: 12,
      title: "Mindfulness Activities for Kids",
      date: "April 20, 2025",
      image: kidsplayhome,
      description:
        "Simple mindfulness practices like breathing exercises, guided relaxation, and gratitude games help children stay calm, focused, and emotionally balanced.",
    },
  ];

  const [blogs] = useState(blogData);
  const { id } = useParams();

  // If an ID is present, show details of that blog
  if (id) {
    const blog = blogs.find((b) => b.id === parseInt(id));
    if (!blog) {
      return <h2 className="text-center text-red-500">Blog not found</h2>;
    }

    return (
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-120 object-cover rounded-xl shadow-md mb-6"
          />
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            {blog.title}
          </h1>
          <span className="text-gray-500 text-sm">{blog.date}</span>
          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {blog.content}
          </p>
        </div>
      </section>
    );
  }

  // Otherwise, show blog list
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
        Our Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
