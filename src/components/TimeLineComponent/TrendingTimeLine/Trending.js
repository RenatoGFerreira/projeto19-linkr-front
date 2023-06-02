import { Trending, Hashtag, ContainerHashtag, Separator, ConteudoHashtagTrending } from "./Style";

export default function TrendingTimeLine() {

    return (
        <Trending>
            <h2>trending</h2>
            <Separator></Separator>
            <ContainerHashtag>
                <HashtagTrendings text={"Naruto"}  >  </HashtagTrendings>
                <HashtagTrendings text={"Naruto"}  >  </HashtagTrendings>
                <HashtagTrendings text={"Naruto"}  >  </HashtagTrendings>
            </ContainerHashtag>
        </Trending>

    )
}



function HashtagTrendings(props) {
    const { text } = props;
    return (
        <ConteudoHashtagTrending>
            <Hashtag>  # {text}</Hashtag>
        </ConteudoHashtagTrending>
    )
}

