 interface IGalleryItem {
    src: string;
    title: string;
    subtitle: string;
  }

export default interface IGalleryProps {
  items: IGalleryItem[];
}