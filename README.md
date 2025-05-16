# 📦 Inventory Management System – SAP-like Web Module for Small Businesses

This project is part of a scalable SAP-inspired business management system built for small businesses like milk tea shops, bakeries, groceries, and PC shops. It is designed as a **web-based dashboard** to handle inventory efficiently, intuitively, and in a way that supports future expansion such as POS integration.

---

## 🔧 Features

### ✅ Inventory Dashboard
- Overview of total items, low stock, out-of-stock, expired items
- Weekly/monthly stock movement graphs
- Recent stock activities

### ✅ Product Catalog / Item Masterlist
- Add/edit/delete items
- Assign categories and suppliers
- Attach barcodes/SKUs
- Set reorder levels
- Upload product images (optional)
- Track expiry dates (optional)

### ✅ Stock In / Stock Out Logs
- Manual stock in/out entries
- POS-ready auto stock-out
- Log with date, user, and remarks
- Filter by date range

### ✅ Stock Adjustment
- Adjust for damaged, lost, expired items
- Requires reason and audit trail
- Quantity changes tracked in history

### ✅ Low Stock Alerts
- Auto-detect items below reorder levels
- Dashboard highlight
- Future: Notification system (email/SMS)

### ✅ Category & Supplier Management
- Create and manage product categories
- Maintain supplier contact information

### ✅ Barcode Support
- Scan items in POS (future-ready)
- Optional barcode image storage
- Auto-generate unique barcodes

### ✅ Expiry Tracker
- Track perishable items
- Highlights near-expiry and expired items
- Filter expired items

### ✅ Inventory Reports
- Stock report
- Movement log report (Stock In/Out/Adjust)
- Low stock & expired item reports
- Export to PDF/Excel (future)

---

## 🗃️ Data Structure

### 📂 Product Table
| Field | Type | Description |
|-------|------|-------------|
| `productID` | String | Unique identifier |
| `productName` | String | Name of the item |
| `category` | String | Category ID |
| `supplierID` | String | Supplier reference |
| `unit` | String | pcs, kg, ml, etc. |
| `costPrice` | Float | Cost of product |
| `sellingPrice` | Float | Retail price |
| `quantity` | Integer | Current stock |
| `reorderLevel` | Integer | Minimum quantity before alert |
| `barcode` | String | Optional unique code |
| `expiryDate` | Date | Optional (for perishable goods) |
| `productImage` | URL/File | Optional image field |

### 📂 Stock Logs
| Field | Type | Description |
|-------|------|-------------|
| `logID` | String | Unique transaction ID |
| `productID` | String | Linked to item |
| `type` | Enum | IN / OUT |
| `quantity` | Integer | Quantity changed |
| `date` | DateTime | Timestamp |
| `remarks` | String | Notes or reason |
| `userID` | String | Responsible user |

### 📂 Adjustment Logs
| Field | Type | Description |
|-------|------|-------------|
| `adjustmentID` | String | Unique ID |
| `productID` | String | Item affected |
| `quantityChanged` | Integer | Positive or negative |
| `reason` | String | Damage, Lost, Recount |
| `date` | DateTime | Adjustment date |
| `userID` | String | Who adjusted it |

### 📂 Categories
| Field | Type | Description |
|-------|------|-------------|
| `categoryID` | String | Unique ID |
| `categoryName` | String | e.g., Beverages, Raw Materials |

### 📂 Suppliers
| Field | Type | Description |
|-------|------|-------------|
| `supplierID` | String | Unique supplier ID |
| `supplierName` | String | Business name |
| `contactPerson` | String | Optional |
| `contactNumber` | String | Optional |
| `address` | String | Optional |

---

## 🚀 Planned Features
- POS module integration
- Multi-branch inventory
- Sales and revenue tracking
- Staff role permissions
- Real-time notifications
- Mobile app (React Native or Flutter)

---

## 📁 Tech Stack (Suggested)
- **Frontend:** React.js or Flet (Flutter Web), Tailwind CSS
- **Backend:** Firebase / Node.js with Express
- **Database:** Firestore / MySQL
- **Authentication:** Firebase Auth / JWT
- **Reporting:** jsPDF / SheetJS

---

## 🧑‍💻 Author
**Gerald Manongdo**  
📍 BSIT Student | Web & Software Developer  
💻 [Portfolio](#) | 📧 [Email](mailto:#) | 🌐 [LinkedIn](#)

---

## 📝 License
This project is open for academic, personal, and freelance use. Commercial use should credit the original author.

