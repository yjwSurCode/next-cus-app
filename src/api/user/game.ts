import { API_URL } from '@/api/config';

export const fetchArchivedGame = async ({
  id,
  userid,
}: {
  id?: number;
  userid?: number;
}) => {
  let url = `http://106.12.154.161/images/json/dummy-backend.json`;
  if (id) {
    url += `id=${id}`;
  } else {
    url += `userid=${userid}`;
  }
  try {
    // TODO: handle caching more efficiently
    const res = await fetch(url, {
      next: { revalidate: 20 },
    });
    return res
    console.log(res,'res')

    if (res && res.status === 200) {
      if (id) {
        const game: any = await res.json();
        if (game.id) return game;
      } else {
        const games: any[] = await res.json();
        if (games.length && games[0].id) return games;
      }
    }
  } catch (err) {
    console.error(err);
  }
};
