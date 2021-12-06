const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.error(err);
  }
};

export default fetcher;
