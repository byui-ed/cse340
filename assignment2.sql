INSERT INTO account (first_name, last_name, email, password)
VALUES (
        'Tony',
        'Stark',
        'tony@starkent.com',
        'Iam1ronM@n'
    );
UPDATE account
SET account_type = 'Admin'
WHERE first_name = 'Tony'
    AND last_name = 'Stark'
    AND email = 'tony@starkent.com';
DELETE FROM account
WHERE first_name = 'Tony'
    AND last_name = 'Stark'
    AND email = 'tony@starkent.com';
UPDATE vehicles
SET description = 'a huge interior'
WHERE vehicle_name = 'GM Hummer'
    AND description = 'small interiors';
SELECT i.make,
    i.model,
    c.classification_name
FROM inventory i
    INNER JOIN classification c ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';
UPDATE inventory
SET inv_image = regexp_replace(inv_image, '^(.*?)(/[^/]+)$', '\1/vehicles\2'),
    inv_thumbnail = regexp_replace(
        inv_thumbnail,
        '^(.*?)(/[^/]+)$',
        '\1/vehicles\2'
    );