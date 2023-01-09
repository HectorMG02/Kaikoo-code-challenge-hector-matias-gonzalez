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

    if (!favoriteChampions) {
      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify([champion.nameId])
      );
      champion.isFavorite = true;
      return;
    }

    if (favoriteChampions.includes(champion.nameId)) {
      const newFavoriteChampions = favoriteChampions.filter(
        (champion) => champion !== champion.nameId
      );

      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify(newFavoriteChampions)
      );

      champion.isFavorite = false;
    } else {
      localStorage.setItem(
        "favoriteChampions",
        JSON.stringify([...favoriteChampions, champion.nameId])
      );

      champion.isFavorite = true;
    }
  }



    export { checkChampionIsFavorite, toggleFavorite };