"use client"
import "../styles/webGhoul.scss";
import "../styles/variable.scss";
import Main from "./Main";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import DashboardProvider from "@/context/DashboardContext";
import ProfileProvider from "@/context/ProfileContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import CartProvider from "@/context/CartContext";
import ItemProvider from "@/context/ItemContext";
import FilterAndSearchAndSortForItemsProvider from "@/context/FilterAndSearchAndSortForItemsContext";
import SubscriptionProvider from "@/context/SubscriptionContext";
import SearchAndSortForUserProvider from "@/context/SearchAndSortForUsersContext";
import SearchAndSortForCategoriesProvider from "@/context/SearchAndSortForCategoriesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <DashboardProvider>
            <ProfileProvider>
              <CartProvider>
                <ItemProvider>
                  <FilterAndSearchAndSortForItemsProvider>
                    <SearchAndSortForUserProvider>
                      <SearchAndSortForCategoriesProvider>
                        <SubscriptionProvider>
                          <Provider store={store}>
                            <Main>
                              {children}
                            </Main>
                          </Provider>
                        </SubscriptionProvider>
                      </SearchAndSortForCategoriesProvider>
                    </SearchAndSortForUserProvider>
                  </FilterAndSearchAndSortForItemsProvider>
                </ItemProvider>
              </CartProvider>
            </ProfileProvider>
          </DashboardProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
