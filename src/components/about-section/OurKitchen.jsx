import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import kitchenImg01 from "../../assets/imgs/kitchen-imgs/kitchen.jpg";
import kitchenImg02 from "../../assets/imgs/kitchen-imgs/kitchen2.jpg";
import kitchenImg03 from "../../assets/imgs/kitchen-imgs/kitchen3.jpg";

const OurKitchen = () => {
    return (
        <section>
            <Stack
                direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                }}
                spacing={2}
                alignItems="center"
                display="flex"
            >
                <Box flexBasis="50%">
                    <Typography variant="h5" color="red" my={3}>
                        Our Kitchen
                    </Typography>
                    <Typography variant="body1" my={1}>
                        The kitchen in our restaurant is truly exceptional. It
                        is a modern and well-equipped space that is designed to
                        meet the highest culinary standards. Our kitchen staff
                        has access to the latest cooking technology, including
                        induction ranges, convection ovens, and sous-vide
                        machines, which allows them to cook with precision and
                        consistency.
                    </Typography>
                    <Typography variant="body1" my={1}>
                        Our kitchen is also impeccably clean and organized. We
                        take food safety very seriously, and our kitchen is
                        regularly inspected and maintained to ensure that it
                        meets the strictest health and sanitation standards. Our
                        chefs are dedicated to creating dishes that not only
                        taste amazing but also look beautiful on the plate. They
                        use high-quality ingredients and take pride in every
                        dish they prepare. When you dine with us, you can be
                        sure that you're experiencing the very best that our
                        kitchen has to offer.
                    </Typography>
                    <Typography variant="body1" my={1}>
                        In addition to being equipped with top-of-the-line
                        cooking technology, our kitchen is staffed by a team of
                        experienced and talented chefs who bring a passion for
                        food to every dish they create. They work together
                        seamlessly, using their expertise and creativity to
                        develop new and exciting menu items that showcase the
                        freshest ingredients available. Whether you're looking
                        for classic comfort food or innovative cuisine, our
                        kitchen has something to offer every palate.
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexBasis="50%"
                    flexDirection="row"
                    alignItems="start"
                    gap={2}
                    flexWrap="wrap"
                >
                    <img
                        src={kitchenImg01}
                        alt="kitchen 01"
                        style={{
                            width: "45%",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                        }}
                    />
                    <img
                        src={kitchenImg02}
                        alt="kitchen 02"
                        style={{
                            width: "45%",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                        }}
                    />
                    <img
                        src={kitchenImg03}
                        alt="kitchen 03"
                        style={{
                            width: "45%",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                        }}
                    />
                </Box>
            </Stack>
        </section>
    );
};

export default OurKitchen;
