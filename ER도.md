```mermaid 
erDiagram
    USERS ||--o{ FAVORITES : has
    USERS ||--o{ CART_ITEMS : has
    USERS ||--o{ ORDERS : places
    USERS ||--o{ INQUIRIES : writes

    PRODUCTS ||--o{ FAVORITES : "referenced in"
    PRODUCTS ||--o{ CART_ITEMS : "referenced in"
    PRODUCTS ||--o{ ORDER_ITEMS : "referenced in"
    PRODUCTS ||--o{ REVIEWS : "has"

    ORDERS ||--o{ ORDER_ITEMS : contains

    USERS {
        string userId PK
        string email
        string nickname
        string address
        string phone
        datetime signInDate
        boolean isAdminister
    }

    FAVORITES {
        string productId PK
        datetime addedAt
    }

    CART_ITEMS {
        string productId PK
        datetime addedAt
        integer quantity
    }

    PRODUCTS {
        string productId PK
        string name
        string category
        string subcategory
        number rateAvg
        number rateCount
        string brand
        number price
        number stock
        string[] tags
        string[] images
        string description
    }

    REVIEWS {
      string reviewId PK
      string userId FK
      string userNickname
      number rate
      string content
      datetime date
    }

    ORDERS {
        string orderId PK
        string userId FK
        string status
        datetime date
        string address
    }

    ORDER_ITEMS {
        string orderItemId 
        string productId
        number quantity
        string snapshotName
        number snapshotPrice
        string snapshotImage
    }

    INQUIRIES {
        string inquiryId PK
        string userId FK
        string content
        datetime date
        string status
    }

    %% style classes
    classDef parent fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px
    classDef child fill:#1e3a8a,stroke:#1e40af,color:#ffffff,stroke-width:2px

    %% apply to entities
    class USERS,PRODUCTS,ORDERS,INQUIRIES parent
    class FAVORITES, CART_ITEMS, REVIEWS, ORDER_ITEMS child