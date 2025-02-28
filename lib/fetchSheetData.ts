export const fetchSheetData = async (sheetId?: string) => {
  if (!sheetId) return { error: "データの取得に失敗しました" };
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${sheetId}/exec`,
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "データの取得に失敗しました" };
  }
};
