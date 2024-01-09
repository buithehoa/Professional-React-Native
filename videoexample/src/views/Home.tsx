import { useEffect } from "react"
import { Pressable } from "react-native"

import [getGenres] from '../services/movideService'

interface HomeProps {
  chooseGenre: (genre : IGenre) => void
}

const Home = (props : HomeProps) => {
      {genres.map(genre => {
        return (
          <Pressable onPress={() => props.chooseGenre(genre)}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        )
      })}
    </ScrollContainer>
  )
}
