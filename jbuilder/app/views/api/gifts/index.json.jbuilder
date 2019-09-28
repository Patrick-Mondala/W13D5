json.array! @gifts do |gift|
    json.partial! partial: 'api/gifts/gift', gift: gift
end