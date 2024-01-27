
import { Content } from './content-interface'; 

class ContentList {
  private contentArray: Content[];
imageUrl: any;

  constructor() {
    this.contentArray = [];
  }

  // Getter function
  get content(): Content[] {
    return this.contentArray;
  }

  // Add function
  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  // Function to get the number of items in the array
  getCount(): number {
    return this.contentArray.length;
  }

  // Function to generate HTML output for a Content item at a specific index
  getContentHTML(index: number): string {
    const contentItem = this.contentArray[index];

    if (!contentItem) {
      return 'Invalid index';
    }

    const { title, description, creator, imgURL, type } = contentItem;

    const imageTag = imgURL ? `<img src="${imgURL}" alt="${title} Image">` : '';

    // Constructing HTML output
    const htmlOutput = `
      <div>
        <h3>${title}</h3>
        <p>Description: ${description}</p>
        <p>Creator: ${creator}</p>
        ${imageTag}
        <p>Type: ${type || 'Not specified'}</p>
      </div>
    `;

    return htmlOutput;
  }
}

export { ContentList };
