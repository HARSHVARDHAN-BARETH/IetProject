interface UserData{
    userId:string,
    name:string,
    email:string,
    address?:address[],
    isActive:boolean,
    cart?:cart[]
}

interface address{
    address_1:string,
    address_2:string,
    address_3:string
}

interface cart{
    cart_Id:string,
    cart_name: string,
    Quantity: number,
    price: number,

}