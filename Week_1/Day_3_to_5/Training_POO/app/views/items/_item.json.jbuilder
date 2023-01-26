json.extract! item, :id, :name, :price, :quantity, :brand, :created_at, :updated_at
json.url item_url(item, format: :json)
