const u = (id, w = 1000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const sizes = ['XS', 'S', 'M', 'L', 'XL']
export const colors = {
  Black: '#111111', White: '#f8f8f6', Sand: '#d8c7a8', Olive: '#6b6b45', Navy: '#1f2a44', Rust: '#b4643c', Grey: '#9a9a9a',
}

export const collections = [
  { slug: 'autumn-edit', name: 'The Autumn Edit', desc: 'Layered neutrals, heavy knits and tailored outerwear for cooler days.', img: u('1509631179647-0177331693ae', 1400) },
  { slug: 'essentials', name: 'Everyday Essentials', desc: 'Organic-cotton basics you’ll reach for every single day.', img: u('1489987707025-afc232f7ea0f', 1400) },
  { slug: 'street', name: 'City Street', desc: 'Relaxed silhouettes and utility details made for the city.', img: u('1529139574466-a303027c1d8b', 1400) },
]

export const categories = ['Tops', 'Shirts', 'Outerwear', 'Bottoms', 'Dresses', 'Knitwear']

export const products = [
  { id: 1, name: 'Heavyweight Boxy Tee', cat: 'Tops', collection: 'essentials', price: 1499, colors: ['Black', 'White', 'Sand'], sizes: ['XS', 'S', 'M', 'L', 'XL'], badge: 'Bestseller',
    images: [u('1521572163474-6864f9cf17ab'), u('1503342217505-b0a15ec3261c'), u('1583743814966-8936f5b7be1a')], desc: '240 GSM organic cotton tee with a boxy, dropped-shoulder fit. Pre-washed for zero shrinkage.' },
  { id: 2, name: 'Relaxed Linen Shirt', cat: 'Shirts', collection: 'essentials', price: 2799, colors: ['White', 'Sand', 'Olive'], sizes: ['S', 'M', 'L', 'XL'],
    images: [u('1596755094514-f87e34085b2c'), u('1620799140408-edc6dcb6d633'), u('1602810318383-e386cc2a3ccf')], desc: 'Breathable European linen with a camp collar and mother-of-pearl buttons.' },
  { id: 3, name: 'Wool Blend Overcoat', cat: 'Outerwear', collection: 'autumn-edit', price: 8999, colors: ['Black', 'Sand', 'Grey'], sizes: ['S', 'M', 'L', 'XL'], badge: 'New',
    images: [u('1539533018447-63fcce2678e3'), u('1591047139829-d91aecb6caea'), u('1544022613-e87ca75a784a')], desc: 'Single-breasted overcoat in a 60% wool blend. Fully lined, falls just below the knee.' },
  { id: 4, name: 'Pleated Wide Trousers', cat: 'Bottoms', collection: 'street', price: 3299, colors: ['Black', 'Olive', 'Sand'], sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [u('1594633312681-425c7b97ccd1'), u('1624378439575-d8705ad7ae80'), u('1542272604-787c3835535d')], desc: 'High-rise trousers with double pleats and a fluid wide leg.' },
  { id: 5, name: 'Slip Midi Dress', cat: 'Dresses', collection: 'autumn-edit', price: 3999, colors: ['Black', 'Rust'], sizes: ['XS', 'S', 'M', 'L'], badge: 'New',
    images: [u('1595777457583-95e059d581b8'), u('1496747611176-843222e1e57c'), u('1515372039744-b8f02a3ae446')], desc: 'Bias-cut satin dress with adjustable straps. Dress it up or down.' },
  { id: 6, name: 'Chunky Ribbed Cardigan', cat: 'Knitwear', collection: 'autumn-edit', price: 4499, colors: ['Sand', 'Grey', 'Olive'], sizes: ['S', 'M', 'L'],
    images: [u('1434389677669-e08b4cac3105'), u('1576566588028-4147f3842f27'), u('1620799139507-2a76f79a2f4d')], desc: 'Oversized cardigan in a soft merino-cotton rib with horn buttons.' },
  { id: 7, name: 'Utility Overshirt', cat: 'Outerwear', collection: 'street', price: 3799, colors: ['Olive', 'Navy', 'Black'], sizes: ['S', 'M', 'L', 'XL'], badge: 'Bestseller',
    images: [u('1551028719-00167b16eac5'), u('1617137968427-85924c800a22'), u('1591047139829-d91aecb6caea')], desc: 'Heavy cotton twill overshirt with four utility pockets. Wear it as a light jacket.' },
  { id: 8, name: 'Straight Leg Jeans', cat: 'Bottoms', collection: 'essentials', price: 3499, colors: ['Navy', 'Black'], sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [u('1542272604-787c3835535d'), u('1541099649105-f69ad21f3246'), u('1624378439575-d8705ad7ae80')], desc: '13 oz rigid denim, mid-rise and a timeless straight leg. Gets better with every wear.' },
  { id: 9, name: 'Fleece Hoodie', cat: 'Tops', collection: 'street', price: 2999, colors: ['Grey', 'Black', 'Sand'], sizes: ['S', 'M', 'L', 'XL'],
    images: [u('1556905055-8f358a7a47b2'), u('1576566588028-4147f3842f27'), u('1503342217505-b0a15ec3261c')], desc: 'Brushed-back fleece hoodie with a double-layer hood and ribbed cuffs.' },
  { id: 10, name: 'Merino Crew Sweater', cat: 'Knitwear', collection: 'essentials', price: 3999, colors: ['Navy', 'Grey', 'Rust'], sizes: ['S', 'M', 'L', 'XL'],
    images: [u('1576566588028-4147f3842f27'), u('1434389677669-e08b4cac3105'), u('1620799139507-2a76f79a2f4d')], desc: 'Fine-gauge extra-fine merino. Warm, breathable and naturally odour-resistant.' },
  { id: 11, name: 'Oxford Button-Down', cat: 'Shirts', collection: 'street', price: 2499, colors: ['White', 'Navy'], sizes: ['S', 'M', 'L', 'XL'],
    images: [u('1602810318383-e386cc2a3ccf'), u('1596755094514-f87e34085b2c'), u('1620799140408-edc6dcb6d633')], desc: 'Classic Oxford cloth with a soft-roll collar. The shirt that goes with everything.' },
  { id: 12, name: 'Wrap Shirt Dress', cat: 'Dresses', collection: 'essentials', price: 3599, colors: ['Sand', 'Olive', 'Black'], sizes: ['XS', 'S', 'M', 'L'],
    images: [u('1496747611176-843222e1e57c'), u('1515372039744-b8f02a3ae446'), u('1595777457583-95e059d581b8')], desc: 'Cotton poplin shirt dress with a tie waist and patch pockets.' },
]

export const heroImg = u('1483985988355-763728e1935b', 2000)
export const aboutImg = u('1441986300917-64674bd600d8', 1600)
export const lookbook = [u('1515886657613-9f3515b0c78f', 900), u('1490481651871-ab68de25d43d', 900), u('1539109136881-3be0616acf4b', 900), u('1529139574466-a303027c1d8b', 900)]

export const rupee = (n) => '₹' + n.toLocaleString('en-IN')
