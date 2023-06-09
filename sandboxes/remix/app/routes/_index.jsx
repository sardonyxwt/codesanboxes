import "../styles/_index.css";
import {useEffect} from "react";
import {HighlightZone, PageWidget} from "@puzzlelabs/puzzle-glossary-react";
import {highlightWidgetManager, defineCustomElementsFromUnPkg} from "@puzzlelabs/puzzle-glossary";

defineCustomElementsFromUnPkg();

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const HighlightZoneExample = () => {
  useEffect(() => {
    highlightWidgetManager.config = {
      hasMarkAll: true,
      puzzleBranding: true,
      hasMarkHyperlink: true,
      callToAction: {
        text: 'CTA',
        link: 'https://puzzlelabs.ai',
      },
    };

    // highlightWidgetManager.theme = {
    //   mode: 'light',
    //   fontFamily: 'Inter',
    //   marker: {
    //     color: 'black',
    //     type: 'highlight',
    //   },
    //   resource: {
    //     color: 'black',
    //   },
    //   callToAction: {
    //       color: 'black',
    //       backgroundColor: 'black',
    //   },
    //   modal: {
    //       primaryColor: 'black',
    //       secondaryColor: 'black',
    //       backgroundColor: 'black',
    //   }
    // };

    highlightWidgetManager.handlers = {
      onCopyClick: console.log,
      onMarkerHover: console.log,
      onResourceClick: console.log,
      onCtaClick: console.log,
      onEvent: console.log,
    }

    highlightWidgetManager.init('6437d691b3c98451b429460f');
  }, [])

  return (
    <HighlightZone as='p' className='highlight-zone'>
      Search openai We are on the verge of a creative renaissance. The world is changing and technology is evolving at
      an unprecedented rate. This is opening up new opportunities for creativity and expression. It has never been
      easier to be a creator. With the tools and resources available today, anyone can start creating and sharing
      their work with the world. This is driving a surge in creativity and innovation. Going one step further,
      advancements in natural language processing technology has brought on a new world to create inside of. Thanks to
      machine learning models such as OpenAI's GPT-4 , it is now possible for any text you can imagine to be generated
      by a machine. Dalle-2 is doing the same for still images. In the next 3-5 years, I imagine we will be able to
      input a movie script and the output will be a movie that could premier in theaters around the world (I love the
      idea of fan fiction versions of movies. The ability to take fan created versions of existing characters and
      universes and see them realized visually will be really exciting to see). That being said, I don't think these
      tools will replace the creativity of humans. I believe these innovations will help us become more creative by
      alleviating the parts of creativity we don't enjoy. Think about your personal creation process and every step
      you take from idea to publish. What are your favorite steps? What are your least favorite steps? Finding tools
      that can help automate your least favorite steps could free your time and energy up so you can focus on creating
      more impactful and meaningful art. We are seeing new forms of expression emerge, through mediums like virtual
      reality and augmented reality. These technologies are giving people new ways to experience and interact with the
      world around them. We are also seeing a rise in popularity of DIY and maker culture. People are taking matters
      into their own hands and creating things that they want to see in the world. This trend is only going to
      continue as we see more people empowered to create their own products and experiences. All of these factors are
      coming together to create a perfect storm for a creative renaissance. We are on the brink of something big,
      something special. So let's embrace it, nurture it, and see where it takes us. I think we need to re-examine
      what a “lifetime” should be defined as. Unlike how “literally” became redefined out of ignorance, I believe
      rethinking the definition of “lifetime” is one of adapting to an ever changing and growing world. The idea of
      “lifetime” has been engrained in our vocabulary for decades. Lifetime warranty. Lifetime guarantee. “That will
      last you a lifetime!” The idea was it would last you your entire life. Until you could no longer physically use
      it. This also translates to careers and relationships. When have you heard the phrase “that job will last you
      until you're retired/dead” lately? I haven't. “Till death do us part” is a disgusting old patriarchal saying
      that guilts people into staying in unhappy and/or abusive relationships and marriages. To deliver users the most
      intuitive user experience, and establish themselves aims to tech of most innovative companies, Airbnb deployed
      artificial intelligence (AI) and machine learning (ML) across their products. Devices are objects or systems
      that have a specific purpose or intention, like electronic communication devices like cell phones. These devices
      are designed to be extremely portable, and they can often fit in your hand. Some mobile devices—like tablets,
      e-readers, and smartphones—are powerful enough to do many of the same things you can do with a desktop or laptop
      computer. We use smart home technologies, cleaning technology makes life easier for people. Your iPhone apps
      should update automatically, but you can check for updates manually in the App Store. If iPhone apps aren't
      updating, make sure you're connected to Wi-Fi and signed in with your Apple ID. What is another word for
      technology? ; hi tech · industrial science ; computing · cybernetics ; engineering · robotics ; science ·
      information technology. Java is an OOP programming language, and it helps to create applications that function
      in a virtual machine or browser, while Java Script is an OOP scripting language (script runs on a browser only).
      During the storm, we use the brain and brainstorm in the brainstorming game. AI . Airbnb.
    </HighlightZone>
  );
}

const PageWidgetExample = () => (
  <PageWidget apiKey='6437d691b3c98451b429460f'/>
)

export default function IndexPage() {
  return (
    <>
      <HighlightZoneExample/>
      {/*<PageWidgetExample/>*/}
    </>
  )
}
