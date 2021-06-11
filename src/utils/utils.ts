export const getRandomID = (): string => {
  const min = 0;
  const max = 1000000;

  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
}

export const transformDate = (str: string): string => {
  let date = new Date(str);

  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour:'2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
}

