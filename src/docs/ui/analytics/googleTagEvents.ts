export type RecommendedEvents = "page_view" | "add_payment_info" | "add_shipping_info" | "add_to_cart" | "add_to_wishlist" | "begin_checkout" | "level_up" | "view_item" | "purchase" | "view_cart" | "remove_from_cart"

export type CustomEvents = "pdp_start" | "pdp_experiences" | "pdp_hotels" | "pdp_rooms" | "pdp_flights"

export interface AddPaymentInfo {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    coupon?: string // Eg. "SUMMER_SALE"
    payment_type?: string // Eg. "Credit Card"
    items: Item[]
}



export interface AddShippingInfo {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    coupon?: string // Eg. "SUMMER_SALE"
    shipping_tier?: string // Eg. "Ground"
    items: Item[]
}

export interface AddToCart {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    items: Item[]
}

export interface AddToWishlist {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    items: Item[]
}

export interface BeginCheckout {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    coupon?: string // Eg. "SUMMER_SALE"
    items: Item[]
}

export interface Purchase {
    currency: string // Eg. "USD"
    transaction_id: string // Eg. "T12345"
    value: number // Eg. 100
    coupon?: string // Eg. "SUMMER_SALE"
    shipping?: number // Eg. 10
    tax?: number // Eg. 18
    items: Item[]
}

export interface ViewCart {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    items: Item[]
}

export interface RemoveFromCart {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    items: Item[]
}

export interface Item {
    item_id: string // Eg. "sku_12345"
    item_name: string // Eg. "Stan and Friends Tee"
    affiliation?: string // Eg. "Google Store"
    coupon?: string // Eg. "SUMMER_SALE"
    discount?: number // Eg. 0
    index?: number // Eg. 1
    item_brand?: string // Eg. "Google"
    item_category?: string // Eg. "Apparel"
    item_category2?: string // Eg. "Mens"
    item_category3?: string // Eg. "Shirts"
    item_category4?: string // Eg. "Tshirts"
    item_category5?: string // Eg. "Short Sleeve"
    items_list_id?: string // Eg. "related_products"
    item_list_name?: string // Eg. "Related products"
    item_variant?: string // Eg. "Gray"
    location_id?: string // Eg. "ChIJIQBpAG2ahYAR_6128GcTUEo (the Google Place ID for San Francisco)"
    price?: number // Eg. 29.2
    quantity?: number // Eg. 1
}

export interface Exception {
    description?: string // Eg. "Missing required field."
    fatal?: boolean // Eg. true
}

export interface LevelEnd {
    level_name?: string // Eg. "Level 1"
    success?: boolean // Eg. true
}

export interface LevelStart {
    level_name?: string // Eg. "Level 1"
}

export interface LevelUp {
    character?: string // Eg. "Mario"
    level?: number // Eg. 5
}

export interface ViewItem {
    currency: string // Eg. "USD"
    value: number // Eg. 100
    items: Item[]
}

/* Custom events */

export interface PdpStart {
    name: string // Eg. "pdp_start"
}
export interface PdpExperinces {
    name: string // Eg. "pdp_experinces"
}

export interface PdpHotels {
    name: string // Eg. "pdp_hotels"
}

export interface PdpRooms {
    name: string // Eg. "pdp_rooms"
}

export interface PdpFlights {
    name: string // Eg. "pdp_flights"
}