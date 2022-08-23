# CAP

If your database needs to syndicate with other databases to ensure that the source of truth for your application remains stable, you will run into **CAP**: Consistency, Availability, Partition tolerance. Just like life, you can't have it all but two of three is pretty good.

## Consistency

>> Every read receives the most recent write or an error.

## Availability

>> Every request receives a (non-error) response, without the guarantee that it contains the most recent write.

## Partition toleration

>> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.