
json.array! @parties do |party|
    json.partial! partial: 'api/parties/party', party: party

    json.set! :guests do
      json.array! party.guests do |guest|
          json.partial! partial: 'api/guests/guest', guest: guest
      end
    end

end