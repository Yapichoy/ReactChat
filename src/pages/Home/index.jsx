import {Message} from "../../components";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar='https://sun1.48276.userapi.com/s/v1/ig2/2or03xuUiMMHdGTecsTfDFCp1-tRW56zP3Kr1K5nPpZgC84p3tQ1U9cI9W_TX3JSzvhAuSmlh3fV9o-DQNRVsYPH.jpg?size=50x0&quality=96&crop=0,175,577,577&ava=1'
        text="Салам бро"
        date={"Mon Mar 15 2021 17:47:22"}
      />
      <Message
        avatar='https://sun1.48276.userapi.com/s/v1/ig2/2or03xuUiMMHdGTecsTfDFCp1-tRW56zP3Kr1K5nPpZgC84p3tQ1U9cI9W_TX3JSzvhAuSmlh3fV9o-DQNRVsYPH.jpg?size=50x0&quality=96&crop=0,175,577,577&ava=1'
        text="Салам бро"
        date={"Mon Mar 15 2021 19:47:22"}
        isMe={true}
        isReaded={false}

      />
    </section>
  );
}


export default Home;