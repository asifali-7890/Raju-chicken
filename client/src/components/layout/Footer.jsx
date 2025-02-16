// src/components/Footer.jsx
import { Grid, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Favorite, Security, LocalOffer } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const StyledFooter = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: 'auto',
}));

const TrustBadge = styled(motion.div)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
}));

// Define footer links with title, items, and each item has a name and a route.
const footerLinks = [
    {
        title: "Company",
        items: [
            { name: "About Us", route: "/about-us" },
            { name: "Vision", route: "/vision" },
            { name: "Mission", route: "/mission" },
            { name: "Careers", route: "/careers" }
        ]
    },
    {
        title: "Support",
        items: [
            { name: "Contact Us", route: "/contact-us" },
            { name: "FAQ", route: "/faq" },
            { name: "Service & Support", route: "/service-support" },
            { name: "Shipping", route: "/shipping" }
        ]
    },
    {
        title: "Legal",
        items: [
            { name: "Policy", route: "/policy" },
            { name: "Terms of Service", route: "/terms-of-service" },
            { name: "CPolicy", route: "/cpolicy" }
        ]
    },
    {
        title: "Resources",
        items: [
            { name: "Blog", route: "/blog" },
            { name: "Recipes", route: "/recipes" },
            { name: "Quality Standards", route: "/quality-standards" },
            { name: "Sustainability", route: "/sustainability" }
        ]
    }
];

const Footer = () => {
    const trustBadges = [
        {
            icon: <Favorite fontSize="large" color="primary" />,
            title: "Quality First",
            text: "We sell only the meat we'd eat ourselves"
        },
        {
            icon: <Security fontSize="large" color="primary" />,
            title: "Fresh Guarantee",
            text: "Never sell anything less than fresh"
        },
        {
            icon: <LocalOffer fontSize="large" color="primary" />,
            title: "Fair Pricing",
            text: "Pay only for what you buy"
        }
    ];

    return (
        <StyledFooter>
            {/* Trust Badges Section */}
            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {trustBadges.map((badge, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <TrustBadge
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {badge.icon}
                                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                        {badge.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {badge.text}
                                    </Typography>
                                </TrustBadge>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Main Footer Content */}
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {footerLinks.map((section, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                                        {section.title}
                                    </Typography>
                                    {section.items.map((item, itemIndex) => (
                                        <MuiLink
                                            key={itemIndex}
                                            component={RouterLink}
                                            to={item.route}
                                            color="textSecondary"
                                            sx={{
                                                display: 'block',
                                                mt: 1,
                                                textDecoration: 'none',
                                                '&:hover': { color: 'primary.main' }
                                            }}
                                        >
                                            {item.name}
                                        </MuiLink>
                                    ))}
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Copyright Section */}
                    <Box sx={{ mt: 8, pt: 4, borderTop: 1, borderColor: 'divider' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body2" color="textSecondary">
                                    © {new Date().getFullYear()} Raju Chicken. All rights reserved.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center' }}>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/policy"
                                        color="textSecondary"
                                        sx={{ '&:hover': { color: 'primary.main' } }}
                                    >
                                        Policy
                                    </MuiLink>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/terms-of-service"
                                        color="textSecondary"
                                        sx={{ '&:hover': { color: 'primary.main' } }}
                                    >
                                        Terms of Service
                                    </MuiLink>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/cpolicy"
                                        color="textSecondary"
                                        sx={{ '&:hover': { color: 'primary.main' } }}
                                    >
                                        CPolicy
                                    </MuiLink>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </StyledFooter>
    );
};

export default Footer;
