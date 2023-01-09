const checkChampionIsFavorite = ({ nameId }) => {
    const favoriteChampions = JSON.parse(
      localStorage.getItem("favoriteChampions")
    );

    if (favoriteChampions) {
      if (favoriteChampions.includes(nameId)) {
        return true;
      }
    }

    return false;
  }


  const toggleFavorite = (champion) => {
    const favoriteChampions = JSON.parse(
      localStorage.getItem("favoriteChampions")
    );

    const { nameId } = champion;

    if (!favoriteChampions) {
      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify([nameId])
      );
      champion.isFavorite = true;
      return;
    }

    if (favoriteChampions.includes(nameId)) {
      const newFavoriteChampions = favoriteChampions.filter(
        (champion) => champion !== nameId
      );

      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify(newFavoriteChampions)
      );

      champion.isFavorite = false;
    } else {
      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify([...favoriteChampions, nameId])
      );

      champion.isFavorite = true;
    }
  }



    export { checkChampionIsFavorite, toggleFavorite };