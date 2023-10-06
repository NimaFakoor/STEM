/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAVCAYAAAAdHVOZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAshJREFUeNrsmM9vEkEUx9/ixhgKBi0qSWvAXkqRGowJHPQAF0w82HozNlH8D+g/ID14VexFoxdovGoaq8ZEaVxqYtWmhUYltEkjlfYgIbJNKzGwP5whIyl1ZwuF1MX6kped7Exmdj/z5r3vLgNtbtPvRNfcnBwql8FEG+PxMLC6CnFaf18fA/PzS8C0M4jYpDg48VSK5HKyIgi9HsDh0EEqJUGxqDxHV1cZuHgM+p0HObZdQSwuSuGJZ1LQ3Alg7vxzT/UdDBwxAywvy2CzKu+5KPIw9vAlrK2VMAxoWxgjN8Xg+w8ytd/jBlDrx3bKma2A+G06+G9Vq4mMy1dKNnSx0QZ/L3yDmZlYspC/zv/TMBCIILqEkCsmo/X1AqTTs7jpQ87tcD0MOqNZGCQaIsi9tEG53Ap8/DQNglBqdj0M+gvyMeR3kGsmwux2E7CpNCR0++g1WhQKsJKNt2rNJImqEPEoAcP9TRD9zsOQz/8E9keRDgKbUC7Vs9uuBtZ+gjxA2gHi+OiMEjj8boP4mt2Anp7WlFYM4nWTc+CjGiYeJWCSaqozNimD0UCf8LRLh/olan8H0iGWYwa4e2+jWl61qDNMtCSO7XNK8t5/II4j1QlqqpPjROoCWHUmElPg91tqdAbbojzga/Blx7fcy5DcEVWrNo8ei4Fbt4UITVpbkdLEajM+RY+I7m4ezfOqAgHDoOqMOoxXeFi+wQQY3tTmNkFQNVmWvUPXBFT1GNBRntpgZODNWxn10z+5FhZma6JhpzBwBFxCgivTZG4IkLI62qjm2E5e1zPG0at832w+UDeMylFokfI8pLUkZbMa+XNnLcNsnee9VRI8o0UQoRtnfIMDJ5LsUno/B3vU7L2mKgitltZdMY/7aHLgos3HMAy/pz/hMYgXzy/UgGi7yPC41f9S9tm3/4t5dehk9Lz/+PBWENh+CTAA39H5/AB72XMAAAAASUVORK5CYII=';
export default image;