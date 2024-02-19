import { useTranslation } from "next-i18next"
import { Flex, Heading, Stack, Text } from "@chakra-ui/react"

import { trackCustomEvent } from "@/lib/utils/matomo"

interface WalletEmptyStateProps {
  resetFilters: () => void
  resetWalletFilter: React.MutableRefObject<() => void>
}

export const WalletEmptyState = ({
  resetFilters,
  resetWalletFilter,
}: WalletEmptyStateProps) => {
  const { t } = useTranslation("page-wallets-find-wallet")

  return (
    <Flex
      justifyContent="center"
      m={{ base: 12, md: 24 }}
      border="2px dashed"
      borderColor="body.light"
    >
      <Stack textAlign="center" p={12} lineHeight="1.6">
        <Heading as="h3" fontSize="3xl" fontWeight="normal" mb={6}>
          {t("page-find-wallet-empty-results-title")}
        </Heading>

        <Text>{t("page-find-wallet-empty-results-desc")}</Text>

        <Text
          mb={0}
          color="primary.base"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            resetFilters()
            resetWalletFilter.current()
            trackCustomEvent({
              eventCategory: "WalletFilterReset",
              eventAction: `WalletFilterReset clicked`,
              eventName: `reset filters`,
            })
          }}
        >
          {t("page-find-wallet-reset-filters")}
        </Text>
      </Stack>
    </Flex>
  )
}
