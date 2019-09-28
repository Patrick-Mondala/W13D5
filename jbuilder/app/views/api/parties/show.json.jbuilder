json.partial! partial: 'api/parties/party', party: @party
json.set! :guests do
  json.array! @party.guests do |guest|
    json.partial! partial: 'api/guests/guest', guest: guest

    json.set! :gifts do
        json.array! guest.gifts do |gift|
            json.title gift.title
            json.description gift.description
        end
    end
  end
end